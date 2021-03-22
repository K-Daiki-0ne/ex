import React, { FC, useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Pagination } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UploadButton } from '@src/components/molecules';
import { 
  CheckFileType,
  FileDataCard
} from '@src/components/organisms';
import FileAPI from '@src/api/File';
import { FileType, File } from '@src/types'
import { fileState } from '@src/store/atoms'
import { fileStateSelector } from '@src/store/selectors/fileStateSelector';
import useStyle from './style';

const MainView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [ , setFileListState ] = useRecoilState(fileState);
  const fileList = useRecoilValue(fileStateSelector)

  const classes = useStyle();

  useEffect(() => {
    setIsLoading(false)
    FileAPI.getAllFiles("12345")
      .then((data: FileType) => setFileListState(data))
      .then(() => setIsLoading(true))
    }, [])

  return isLoading ? (
    <div className={classes.root}>
      <div className={classes.bottomArea}>
        <UploadButton 
          props="12345"
        />
        <CheckFileType />
      </div>
      {
        fileList.map((files: File, index: number) => {
          return (
            <div key={index}>
              <FileDataCard props={files}/>
            </div>
          )
        })
      }
      <div className={classes.page}>
        <Pagination count={10} className={classes.selected} />
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <CircularProgress size={140}/>
    </div>
  )
}

export default MainView