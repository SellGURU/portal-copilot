/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface InputMentionsProps {
    value:string
    onChange:(value:string) => void
    onSubmit:() => void
    changeBenchMarks:(benchs:Array<string>) => void
}
const mentions = [
  { id: '1', name: 'Time Priorities ' },
  { id: '2', name: 'Recovery' },
  { id: '3', name: 'Metabolic Function' },
  { id: '4', name: 'Cardiovascular Health' },
  { id: '4', name: 'Body Composition' },
  { id: '4', name: 'Daily Activity ' },
  { id: '4', name: 'Stability' },
  { id: '4', name: 'Mobility' },
  { id: '4', name: 'Flexibility' },
  { id: '4', name: 'Cardiovascular Fitness ' },
  { id: '4', name: 'Power' },
  { id: '4', name: 'Bodyweight Max Strength' },
  { id: '4', name: 'Weighted Max Strength' },
  { id: '4', name: 'Muscle Endurance' },
  { id: '4', name: 'Functional Strength' },
  { id: '4', name: 'Emotional Fitness' }                            
];
const InputMentions:React.FC<InputMentionsProps> = ({value,onChange,onSubmit,changeBenchMarks}) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };  
    const [suggestions, setSuggestions] = useState<any>([]);  
    const [isShowMentions,setIsShowMentions] = useState(false)
    const handelChange = (e:string) => {
        const inputValue = e
        
        const mentionRegex = /@\w+(\s\w+)?/g;

        // setContent(inputValue);/
        onChange(inputValue);
        console.log(inputValue)
        // Move the cursor to the end after setting innerHTML


        const foundMentions = inputValue.match(mentionRegex) || [];
        changeBenchMarks(foundMentions)
        // Find the last '@' and get the word after it
        const lastAtIndex = inputValue.lastIndexOf('@');
        if (lastAtIndex !== -1) {
            setSuggestions(mentions)
            setIsShowMentions(true)
            const mentionText = inputValue.slice(lastAtIndex + 1);
            // alert(mentionText)
            if (mentionText.length > 0) {
                // Filter the users based on the mentionText
                const filteredUsers = mentions.filter((men) =>
                men.name.toLowerCase().includes(mentionText.toLowerCase())
                );
                setSuggestions(filteredUsers);
                setIsShowMentions(true);
            } else {
                // setIsShowMentions(false);
                // setSuggestions(mentions)
            }
        } else {
        setIsShowMentions(false);
        }
    } 
    const handleSuggestionClick = (mention:any) => {
        // Replace the @mention with the selected user name
        const lastAtIndex = value.lastIndexOf('@');
        const newText = value.slice(0, lastAtIndex) + `@${mention.name} `;
        handelChange(newText)
        // onChange(newText);
        setIsShowMentions(false);
    }; 
       
    return (
        <>
        <div className="w-[98%] bg-black-primar  absolute bottom-0 ml-2 mb-2    border dark:border-main-border px-[6px] py-1 flex items-center gap-3 rounded-md">
            <input
            className="w-full border dark:border-main-border bg-white border-light-border-color dark:bg-black-secondary rounded-md outline-none pl-2 py-1 text-xs text-light-secandary-text dark:text-primary-text"
            type="text"
            placeholder="Write message here ..."
            value={value}
            onChange={(e) => {
                handelChange(e.target.value)
            }}
            onKeyPress={handleKeyPress}
            />
                {/* <div
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: value }} // Display formatted text
                    onInput={(e:any) => {
                        handelChange(e)
                    }}
                    className="w-full border dark:border-main-border bg-white border-light-border-color dark:bg-black-secondary rounded-md outline-none pl-2 py-1 text-xs text-light-secandary-text dark:text-primary-text"
                    style={{
                    // whiteSpace: 'pre-wrap', // Preserve line breaks
                    }}
                ></div>             */}
            <img onClick={onSubmit} src="/Themes/Aurora/icons/send.svg" alt="" />

        </div>           
        {isShowMentions && suggestions.length>0 &&
            (
                <>
                    <div className="w-full absolute bottom-12 px-2">
                        <div className="w-full px-4 py-2 max-h-[150px] overflow-y-scroll bg-black-primary border border-main-border rounded-[6px]">
                         {suggestions.map((el:any) => {
                            return (
                                <div onClick={() => handleSuggestionClick(el)} className="text-primary-color mb-1 cursor-pointer text-[10px]">
                                    @{el.name}
                                </div>
                            )
                         })}   
                        </div>

                    </div>
                </>
            )
        } 
        </>
    )
}

export default InputMentions