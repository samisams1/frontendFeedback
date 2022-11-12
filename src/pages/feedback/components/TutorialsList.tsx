import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FeedbackQuery from "./queryFeedback";
import { Button } from '@mui/material';
import Example2 from './example2';

export default function ListFeedback() {

  const { tutorials} = Example2(); 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tutorials.map((row:any) => (
            <TableRow key={row.title}>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
