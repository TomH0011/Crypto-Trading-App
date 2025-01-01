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

const Portfolio = () => {
  return (
    <div>
      <Table className="table-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-left">ASSET</TableHead>
            <TableHead className="text-left">SYMBOL</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
            <TableHead className="text-right">UNIT</TableHead>
            <TableHead className="text-right">CHANGE</TableHead>
            <TableHead className="text-right">VALUE</TableHead>
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
              <TableCell className="text-right">98,500</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
