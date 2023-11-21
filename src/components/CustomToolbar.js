import { useState } from 'react';
import {
  // GridToolbar,
  // GridFilterInputMultipleValue,
  //  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { Button, Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
// import RefreshIcon from '@mui/icons-material/Refresh';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Dropzone from 'react-dropzone';
import FilterButton from './FilterButton';

export default function CustomToolbar({
  updateOnclick,
  hasFullFilters,
  filterOnClick,
  modalState,
  hasUpload,
  hasAction,
  runAction,
  actionLabel,
  actionIcon,
  uploadFile,
  hasAddItem,
  addItem,
  itemBtnLabel,
  itemIcon,
  dropFile,
  dropFileRelation,
  dropFileMessage,
  dropFileTypeAllowed,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dragColor, setDragColor] = useState('#559fef00');
  const [dragBorderColor, setDragBorderColor] = useState('solid 1px grey');
  return (
    <>
      <GridToolbarContainer>
        <GridToolbarDensitySelector
          variant='outlined'
          sx={{ fontSize: '1.5em !important', mb: '5px' }}
        />
        <GridToolbarColumnsButton
          variant='outlined'
          sx={{ fontSize: '1.5em !important', mb: '5px' }}
        />
        <GridToolbarFilterButton
          variant='outlined'
          sx={{ fontSize: '1.5em !important', mb: '5px' }}
        />
        {hasFullFilters ? (
          <FilterButton
            variant='outlined'
            // size='large'

            filterOnClick={filterOnClick}
            modalState={modalState}
          />
        ) : undefined}
        {hasUpload ? (
          <Button
            sx={{
              padding: '2.5px 15px',
              fontSize: '1.5em !important',
              mb: '5px',
            }}
            // size='large'
            variant='outlined'
            onClick={() => uploadFile()}
            startIcon={<MobiledataOffIcon />}
          >
            Upload
          </Button>
        ) : undefined}
        {hasAction ? (
          <Button
            sx={{
              padding: '2.5px 15px',
              fontSize: '1.5em !important',
              mb: '5px',
            }}
            // size='large'
            variant='outlined'
            onClick={() => runAction()}
            startIcon={actionIcon ? actionIcon : <PrintOutlinedIcon />}
          >
            {actionLabel}
          </Button>
        ) : undefined}
        {hasAddItem ? (
          <Button
            sx={{
              padding: '2.5px 15px',
              fontSize: '1.5em !important',
              mb: '5px',
            }}
            variant='outlined'
            // size='normal'
            onClick={() => addItem()}
            startIcon={itemIcon ? itemIcon : <CreateNewFolderOutlinedIcon />}
          >
            {itemBtnLabel}
          </Button>
        ) : undefined}
        {dropFile && (
          <Dropzone
            onDrop={(acceptedFiles) => {
              console.log(acceptedFiles);
              setDragBorderColor('solid 1px grey');
              setDragColor('#559fef00');
            }}
            onDragOver={() => {
              setDragColor('#559fef55');
              setDragBorderColor('dashed 1px white');
            }}
            onDragLeave={() => {
              setDragColor('#559fef00');
              setDragBorderColor('solid 1px grey');
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <Box
                  className='dropZone1'
                  {...getRootProps()}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    border: `${dragBorderColor}`,
                    borderRadius: '5px',
                    minHeight: '38px',
                    marginBottom: '5px',
                    background: `${dragColor}`,

                    '&:hover': {
                      background: '#559fef05',
                      border: 'solid 1px white',
                    },
                  }}
                >
                  <input {...getInputProps()} />
                  <DownloadForOfflineOutlinedIcon sx={{ marginLeft: '15px' }} />
                  <Typography
                    sx={{
                      padding: '2.5px 8px',
                      fontSize: '1.5em !important',
                    }}
                  >
                    {dropFileMessage
                      ? dropFileMessage
                      : `Drag 'n' drop files here, or click to select files`}
                  </Typography>
                </Box>
              </section>
            )}
          </Dropzone>
        )}
        <GridToolbarQuickFilter
          // size='large'
          // autoFocus
          placeholder
          debounceMs={1000}
          sx={{
            right: { sm: 0 },
            position: { sm: 'absolute' },
            marginRight: { sm: '10px' },
            backgroundColor: colors.blueAccent[600],
            p: '2px',
            borderRadius: '5px',
            mb: '5px',
          }}
        />
      </GridToolbarContainer>
    </>
  );
}
