

import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useState } from "react";
import Box from '../../components/box/box';
import UserModal from "../userModal/userModal";
function HomeHeader() {
    const [openFilter, setFilterOpen] = useState(false);
    const handleAdd = () => {
        setFilterOpen(true);
      };
    const handleAddClose=()=>{
        setFilterOpen(false);
    }
  return (
   <>
   <Box>
        <AddBoxRoundedIcon
          style={{
            cursor: "pointer",
         background:"#fff",
            fontSize: "40px",
          }}
          onClick={handleAdd}
        />
      </Box>
      {
        openFilter&&
        <UserModal openFilter={openFilter} handleAddClose={handleAddClose} user={undefined} onSubmit={function (user: any): void {
                  throw new Error("Function not implemented.");
              } }/>
      }
   </>
  );
}

export default HomeHeader;
