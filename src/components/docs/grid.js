import React from 'react';
import Playground from 'component-playground';
import {
  Breakpoints,
  Colors,
  Grid,
  Cell,
  Block,
  Callout,
  Thumbnail,
} from 'react-foundation';

export const GridDocs = () => (
  <section className="grid-docs">
    <Grid>
      <Cell large={12}>
        <h2>Grid</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/grid/basics')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Small Grids</h3>
          <Playground codeText={require('raw!../examples/grid/small')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Medium Grids</h3>
          <Playground codeText={require('raw!../examples/grid/medium')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Combined Column/Row</h3>
          <Playground codeText={require('raw!../examples/grid/column-row')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Fluid Row</h3>
          <Playground codeText={require('raw!../examples/grid/fluid-row')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Nesting</h3>
          <Playground codeText={require('raw!../examples/grid/nested')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Offsets</h3>
          <Playground codeText={require('raw!../examples/grid/offset')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Incomplete Rows</h3>
          <Playground codeText={require('raw!../examples/grid/end')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Collapse/Uncollapse Rows</h3>
          <Playground codeText={require('raw!../examples/grid/collapse')}
                      scope={{ React, Breakpoints, Colors, Grid, Cell, Block, Callout }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Centered Columns</h3>
          <Playground codeText={require('raw!../examples/grid/center')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Source Ordering</h3>
          <Playground codeText={require('raw!../examples/grid/order')}
                      scope={{ React, Grid, Cell }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Block Grids</h3>
          <Playground codeText={require('raw!../examples/grid/block')}
                      scope={{ React, Grid, Cell, Thumbnail }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default GridDocs;
