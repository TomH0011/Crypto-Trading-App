import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Watchlist = () => {
  const handleRemoveToWatchlist =(value)=>{
    console.log(value)
  }
  return (
    <div>
    <Table className="border table-auto w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5 w-[150px] text-left">COIN</TableHead>
          <TableHead className="text-left">SYMBOL</TableHead>
          <TableHead className="text-right">VOLUME</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
          <TableHead className="text-right">CHANGE</TableHead>
          <TableHead className="text-right">VALUE</TableHead>
          <TableHead className="text-right text-red-600">REMOVE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(9)].map((_, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center gap-2">
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarImage
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/256px-Bitcoin.svg.png"
                  alt="Bitcoin Logo"
                  className="w-8 h-8 rounded-full"
                />
              </Avatar>
              <span>Bitcoin</span>
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell className="text-right">42,630,707,094</TableCell>
            <TableCell className="text-right">99,304</TableCell>
            <TableCell className="text-right">19,499,918,074</TableCell>
            <TableCell className="text-right">9850</TableCell>
            <TableCell className="text-right">
              <Button variant='outline' onClick={()=>handleRemoveToWatchlist(item.id)} size='icon' className='h-10 w-10'>
                <BookmarkFilledIcon className="w-6 h-6"/>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Watchlist