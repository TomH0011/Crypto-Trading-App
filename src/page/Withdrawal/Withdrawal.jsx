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

const Withdrawal = () => {
  return (
    <div>
    <Table className="border table-auto w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5 w-[150px] text-left">Date</TableHead>
          <TableHead className="text-left">Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(9)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <p>01/01/2025</p>
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <span>Bank Account</span>
            </TableCell>
            <TableCell className="text-right">$69,249</TableCell>
            <TableCell className="text-right">$99,304</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Withdrawal