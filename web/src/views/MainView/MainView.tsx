import React, { FC, useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Pagination } from '@material-ui/lab';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UploadButton } from '@src/components/molecules';
import { 
  CheckFileType,
  FileDataCard
} from '@src/components/organisms';
import FileAPI from '@src/api/File';
import { FileType, File } from '@src/types'
import { fileState, userInfoState } from '@src/store/atoms'
import { fileStateSelector } from '@src/store/selectors/fileStateSelector';
import useStyle from './style';

const MainView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ , setFileListState ]    = useRecoilState(fileState);
  const [ , setUserIDState]       = useRecoilState(userInfoState)
  const fileList                  = useRecoilValue(fileStateSelector)

  const classes     = useStyle();
  const router      = useRouter();
  const { userId }  = router.query;

  useEffect(() => {
    setIsLoading(false)
    FileAPI.getAllFiles(userId)
      .then((data: FileType) => setFileListState(data))
      .then(() => setIsLoading(true))
    setUserIDState(userId)
  }, [])

  // Get current news
  const filePerPage: number = 5;
  const indexOfLastFile:number = currentPage * filePerPage;
  const indexOfFirstFile:number = indexOfLastFile - filePerPage;
  const currentFile: any = fileList.slice(indexOfFirstFile, indexOfLastFile);

  // Change page
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  return isLoading ? (
    <div className={classes.root}>
      <div className={classes.bottomArea}>
        <UploadButton 
          props={userId}
        />
        <CheckFileType />
      </div>
      {
        currentFile.map((files: File, index: number) => {
          return (
            <div key={index}>
              <FileDataCard props={files}/>
            </div>
          )
        })
      }
      <div className={classes.page}>
        <Pagination
          classes={{ ul: classes.ul }} 
          onChange={handleChangePage}
        />
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <CircularProgress size={140}/>
    </div>
  )
}

export default MainView