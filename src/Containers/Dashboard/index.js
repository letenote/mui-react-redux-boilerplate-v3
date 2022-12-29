import React, { memo, Fragment } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";

export default memo(() => {
  const location = useLocation();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Fragment>
      <div>
        <h1>Lazy Loading Example</h1>
        <h2>{`path: => ${location.pathname}`}</h2>
        <p>
          This example demonstrates how to lazily load both route elements and
          even entire portions of your route hierarchy on demand. To get the full
          effect of this demo, be sure to open your Network tab and watch the new
          bundles load dynamically as you navigate around.
        </p>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" size="large">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <p>
          This example demonstrates how to lazily load both route elements and
          even entire portions of your route hierarchy on demand. To get the full
          effect of this demo, be sure to open your Network tab and watch the new
          bundles load dynamically as you navigate around.
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>
        <p>
          This example demonstrates how to lazily load both route elements and
          even entire portions of your route hierarchy on demand. To get the full
          effect of this demo, be sure to open your Network tab and watch the new
          bundles load dynamically as you navigate around.
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>
        <p>
          This example demonstrates how to lazily load both route elements and
          even entire portions of your route hierarchy on demand. To get the full
          effect of this demo, be sure to open your Network tab and watch the new
          bundles load dynamically as you navigate around.
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>

        <p>
          The "About" page is not loaded until you click on the link. When you do,
          a <code>&lt;React.Suspense fallback&gt;</code> renders while the code is
          loaded via a dynamic <code>import()</code> statement. Once the code
          loads, the fallback is replaced by the actual code for that page.
        </p>

        <p>
          The "Dashboard" page does the same thing, but takes it even one step
          further by <em>dynamically defining additional routes</em> once the page
          loads! Since React Router lets you declare your routes as
        </p>

        
      </div>
    </Fragment>
  )
})