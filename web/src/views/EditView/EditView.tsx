import React, { FC, useState ,useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { CircularProgress } from '@material-ui/core';
import { fileTypeState } from '@src/store/atoms';
import { FileAPIType } from '@src/types';
import { getSingleURL } from '@src/lib/getSingleURL';
import FileAPI from '@src/api/File';


export const Edit: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const router = useRouter();
  const fileType = useRecoilValue(fileTypeState);
  const { fileId } = router.query;

  useEffect(() => {
    setIsLoading(false);
    const END_POINT = getSingleURL(fileId, fileType);
    FileAPI.getSingleFile(END_POINT)
      .then((data) => setSingleFile(data.data))
      .then(() => setIsLoading(true))
  }, [])
  return isLoading ? (
    <div>
      <p>aaa</p>
    </div>
  ) : (
    <div>
      <CircularProgress size={140}/>
    </div>
  )
}