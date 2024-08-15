import { InfoCard, HistoryBox, ChatHistoryBox } from "@/components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import Seartch from "../../assets/images/icons8-search-64.png";
import Clinic from "../../assets/images/clinic.png";

export const Messages = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const [TabBar, setTabBar] = useState(2);
  const [MenueBar, setMenueBar] = useState(0);

  useEffect(() => {
    const handleClickOutside = () => {
      // Check if the click is outside the menu and menu is open
      if (MenueBar === 1) {
        setMenueBar(0);
      }
    };

    // Attach event listener to document
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [MenueBar]);

  const handleMenuClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation(); 
    setMenueBar(1);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <InfoCard></InfoCard>
      <div className="Main_box">
        <div className="history_box">
          <div className="tab_history">
            <div
              className={TabBar === 1 ? "tab active" : "tab"}
              onClick={() => setTabBar(1)}
            >
              Chat History
            </div>
            <div
              className={TabBar === 2 ? "tab active" : "tab"}
              onClick={() => setTabBar(2)}
            >
              Notification History
            </div>
          </div>
          <div className="tab_box">
            <div className="input_box">
              <div className="logo_input">
                <img src={Seartch} alt="" />
                <input type="text" placeholder="Search for biomarkers..." />
              </div>
            </div>
            {TabBar === 1 ? (
              <div className="boxs_tab">
                <ChatHistoryBox
                  theme={theme}
                  placeholder="Search chat history"
                />
              </div>
            ) : null}
            {TabBar === 2 ? (
              <div className="boxs_tab">
                <HistoryBox theme={theme} placeholder="Search chat history" />
              </div>
            ) : null}
          </div>
        </div>
        <div className="message_box">
          <div className="notif_head">
            <div className="info_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={handleMenuClick}
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
              <p>Notification_ID_183957420786</p>
            </div>
          </div>
          <div className="date_chat">12 June 2024</div>
          <div className="box_text">
            {/* ///////Sender box////////////// */}

            <div className="chats_detail">
              <div className="infoChat sender">
                <div className="img_place">
                  <img src={Clinic} alt="Clinic" />
                </div>
                <div className="time_Icon">
                  <p>11:46</p>
                  <div className="textBox">
                    <p>Please upload your test answer in your account.</p>
                  </div>
                  <p className="Delivered">Delivered</p>
                </div>
                <div className="more_options">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    onClick={handleMenuClick}
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
                  {MenueBar == 1 ? (
                    <div className="menue_bar">
                      <button>Copy</button>
                      <button>Delete</button>
                      <button>Cut</button>
                      <button>Copy</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
