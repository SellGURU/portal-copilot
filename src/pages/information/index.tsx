/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabsWrapper } from "@/components";
import { useSelector } from "react-redux";
import { Link, Outlet , useNavigate } from "react-router-dom";
import { TabsInfo } from "./tabsInfo";

const Information = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className=" bg-white dark:bg-black-background  h-fit -mt-5  overflow-hidden flex flex-col justify-start items-center px-5 ">
      <div className="flex  py-2 z-10 justify-center bg-white dark:bg-black-background w-full">
        <div className=" w-full flex items-center gap-3 ">
          <Link to={"/"}>
            <div className={`${theme}-tab-icon-container`}>
              <img className={`${theme}-icons-arrow-left`} />
            </div>
          </Link>
          <div>
            
          </div>
          <TabsWrapper TabsInfo={TabsInfo} handleTabClick={handleTabClick}/>
        </div>

      </div>
      <div className="  flex gap-3 pt-0 justify-start w-full">
        <Outlet />

      </div>
    </div>
  );
};

export default Information;
