import React, { useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { InvoiceContext } from '@/context/invoice-context';

const FilterStatus = () => {
  const isMobile = useIsMobile();

  const { statuses, selectedStatus, setSelectedStatus } =
    useContext(InvoiceContext);

  console.log('debug - statuses, selectedStatus, setSelectedStatus ', {
    statuses,
    selectedStatus,
    setSelectedStatus,
  });
  return (
    <Select
      onValueChange={(value) => {
        setSelectedStatus(value);
      }}
    >
      <SelectTrigger
        defaultValue="net-1"
        className="w-14 md:w-[118px] border-none bg-transparent p-0 normal-case"
      >
        <SelectValue placeholder={isMobile ? 'Filter' : 'Filter by status'}>
          {selectedStatus === null ? null : selectedStatus}
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        align="center"
        className="p-3 sm:p-6 w-[100px] sm:w-[192px] rounded-[8px]"
        sideOffset={6}
      >
        {statuses.map((item, index) => (
          <SelectItem
            key={item}
            hideCheck
            className={cn('capitalize p-0', { 'mt-3': index > 0 })}
            value={item}
          >
            <label
              htmlFor={`checkbox-${item}`}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            >
              <Checkbox
                id={`checkbox-${item}`}
                checked={selectedStatus === item}
              />
              <span className="!leading-[12px]">{item}</span>
            </label>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterStatus;
