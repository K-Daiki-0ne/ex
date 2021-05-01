import React, { FC, useState ,useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { 
  CircularProgress,
  Typography,
  TextField,
  TextareaAutosize
} from '@material-ui/core';
import { fileTypeState } from '@src/store/atoms';
import { FileAPIType } from '@src/types';
import { getSingleURL } from '@src/lib/getSingleURL';
import FileAPI from '@src/api/File';


export const EditView: FC = (): JSX.Element => {
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
      <div>
        <Typography 
          variant="h6" 
          gutterBottom
        >
          File Name
        </Typography>
        <TextField id="standard-basic" label="Standard" />
      </div>
      <Typography 
          variant="h6" 
          gutterBottom
        >
          Title
        </Typography>
        <TextField id="standard-basic" label="Standard" />
        <Typography 
          variant="h6" 
          gutterBottom
        >
          Comment
        </Typography>
        <TextareaAutosize
          rowsMax={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
        />
    </div>
  ) : (
    <div>
      <CircularProgress size={140}/>
    </div>
  )
}