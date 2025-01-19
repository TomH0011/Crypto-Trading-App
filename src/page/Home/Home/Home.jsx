import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  console.log("Home page loaded")
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotRelease, setIsBotRelease] = React.useState(false);

  const handleBotRelease=()=>setIsBotRelease(!isBotRelease);

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);

  }
  const handleKeyPress=(event)=>{
    if(event.key=='Enter'){
      console.log(inputValue)
    }
    setInputValue("")
  }

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <div>
          <AssetTable />
        </div>
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart/>

          <div className="flex gap-5 items-center">

            <div className="w-8 h-8">
              <Avatar>
                <AvatarImage src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png"}/>
              </Avatar>
            </div>
            <div>
            <div className="flex items-center gap-2">
              <p>ETH</p>
              <DotIcon className="text-gray-400"/>
              <p className="text-gray-400"> Ethereum</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">5464</p>
              <p className="text-red-600">
                <span>-1319049822.578</span>
                <span>(-0.29803%)</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
  {isBotRelease && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[65vh] bg-slate-900">
    {/* Chatbot Header */}
    <div className="flex items-center justify-between border-b px-6 h-[12]">
      <p>Chat Bot</p>
      <Button onClick = {handleBotRelease} variant="ghost" size="icon" className="bg-slate-900">
        <Cross1Icon />
      </Button>
    </div>

    {/* Chat Content */}
    <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
      {/* Greeting Message */}
      <div className="self-start pb-5 w-auto">
        <div className="justify-start self-start px-5 py-2 rounded-md bg-slate-800 w-auto">
          <p className="text-left">Hi Tom Howard</p>
          <p className="text-left">How are you today?</p>
          <p className="text-left">Do you have any questions?</p>
        </div>
      </div>

      {/* Messages */}
      {[1, 1, 1, 1].map((item, i) => (
        <div key={i} className={`pb-5 w-auto ${i % 2 === 0 ? "self-end" : "self-start"}`}>
          {i % 2 === 0 ? (
            <div className="px-5 py-2 rounded-md bg-slate-800 w-auto">
              <p className="text-right">Prompt - who are you?</p>
            </div>
          ) : (
            <div className="px-5 py-2 rounded-md bg-slate-800 w-auto">
              <p className="text-left">I am the AI chatbot for Tom's Trading app.</p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="h-[12%] border-t">
      <Input className='w-full h-full border-none outline-none' placeholder='Write Prompt...'
      onchange ={handleChange}
      value={inputValue}
      onKeyPress={handleKeyPress}/>
    </div>
  </div>}

  {/* Chatbot Toggle Button */}
  <div className="relative w-[10rem] cursor-pointer group">
    <Button onClick={handleBotRelease} className="w-full h-[3rem] gap-2 items-center">
      <MessageCircle size={30} className="fill-primary transition-colors duration-200 -rotate-90" />
      <span className="text-2xl">Chatbot</span>
    </Button>
  </div>
</section>


    </div>
              );
            };

export default Home;
