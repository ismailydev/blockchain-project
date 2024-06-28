'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

export type Token = {
  id?: string;
  name: string;
  currency: string;
  icon: string;
  lastTrade: string;
  percent24h: string;
  change24h: string;
  action?: string;
};

export const tokenColumns: ColumnDef<Token>[] = [
  {
    accessorKey: 'id',
    header: () => <div className="uppercase text-light">Assets</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Image src={row.original.icon} width={64} height={64} alt={`${row.original.name} icon`} />
          <p className="text-lg">
            {row.original.name}/<span className="text-dark">{row.original.currency}</span>
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'lastTrade',
    header: () => <div className="uppercase text-light">Last Trade</div>,
    cell: ({ row }) => {
      const value = Number(row.original.lastTrade);
      const formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return <div className="">${formattedValue}</div>;
    },
  },
  {
    accessorKey: 'percent24h',
    header: () => <div className="uppercase text-light">24H %</div>,
    cell: ({ row }) => {
      const value = Number(row.original.percent24h);
      const formattedValue = Math.abs(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const formattedWithSign =
        value > 0 ? `+${formattedValue}%` : `${value < 0 ? `-${formattedValue}` : formattedValue}%`;

      return (
        <div className={`${value === 0 ? 'text-dark' : value > 0 ? 'text-success-dark' : 'text-error-dark'}`}>
          {formattedWithSign}
        </div>
      );
    },
  },
  {
    accessorKey: 'change24h',
    header: () => <div className="uppercase text-light">24H Change</div>,
    cell: ({ row }) => {
      const value = Number(row.original.change24h);
      const formattedValue = Math.abs(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const formattedWithDollar = value < 0 ? `-$${formattedValue}` : `$${formattedValue}`;

      return (
        <div className={`${value === 0 ? 'text-dark' : value > 0 ? 'text-success-dark' : 'text-error-dark'}`}>
          {formattedWithDollar}
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: () => (
      <div className="flex justify-end items-center text-blue-500">
        <p>More</p>
        <ChevronRightIcon className="w-4 h-4" />
      </div>
    ),
    cell: () => {
      return (
        <div className="flex p-2 bg-success text-black w-fit ml-auto cursor-pointer">
          <p className="self-end justify-end justify-self-end">TRADE</p>
        </div>
      );
    },
  },
];
