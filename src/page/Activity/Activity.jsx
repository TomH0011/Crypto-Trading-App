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

const Activity = () => {
  return (
    <div>
    <Table className="border table-auto w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5 w-[150px] text-left">Date & Time</TableHead>
          <TableHead className="text-left">Trading Pair</TableHead>
          <TableHead className="text-right">Buying Price</TableHead>
          <TableHead className="text-right">Selling Price</TableHead>
          <TableHead className="text-right">Order Type</TableHead>
          <TableHead className="text-right">Profit/Loss</TableHead>
          <TableHead className="text-right ">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(9)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <p>01/01/2025</p>
              <p className="text-gray-600">00:00:00</p>
            </TableCell>
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
            <TableCell className="text-right">$69,249</TableCell>
            <TableCell className="text-right">$99,304</TableCell>
            <TableCell className="text-right text-red-600">-0.20009</TableCell>
            <TableCell className="text-right">9850</TableCell>
            <TableCell className="text-right">345</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Activity