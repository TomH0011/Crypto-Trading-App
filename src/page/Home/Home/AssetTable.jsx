import React from "react"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"

const AssetTable = () => {
  const navigate = useNavigate()
  return (

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">COIN</TableHead>
        <TableHead>SYMBOL</TableHead>
        <TableHead>VOLUME</TableHead>
        <TableHead>24H</TableHead>
        <TableHead className="text-right">MARKET CAP</TableHead>
        <TableHead>PRICE</TableHead>

      </TableRow>
    </TableHeader>
    <TableBody>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <TableRow key = {index}>
        <TableCell onClick = {()=>navigate('/market/bitcoin')}className="font-medium flex items-center gap-2">
          <Avatar className="flex items-center justify-center">
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/256px-Bitcoin.svg.png" className='w-8 h-8 p-1'/>
            <span>Bitcoin</span>
          </Avatar>
        </TableCell>
        <TableCell>BTC</TableCell>
        <TableCell>42630707094</TableCell>
        <TableCell>99304</TableCell>
        <TableCell>1949991807458</TableCell>
        <TableCell className="text-right">98500</TableCell>

      </TableRow> )}
    </TableBody>
  </Table>


    )
}


export default AssetTable;