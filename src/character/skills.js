import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Character extends React.Component {
    render() {
        return (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Multipier</TableHeaderColumn>
                <TableHeaderColumn>Skill</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Fighting</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Trickery</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Action</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Talking</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Perception</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>6</TableRowColumn>
                <TableRowColumn>Inner Strength</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        );
    }
}

export default Character;
