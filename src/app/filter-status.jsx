import React, { useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { InvoiceContext } from '@/context/invoice-context';
import { useIsMobile } from '@/hooks/use-mobile';

const FilterStatus = () => {
  const isMobile = useIsMobile();
  const { statuses, selectedStatuses, setSelectedStatuses } =
    useContext(InvoiceContext);

  const handleStatusChange = (status) => {
    if (selectedStatuses?.includes(status)) {
      setSelectedStatuses(selectedStatuses?.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...(selectedStatuses ?? []), status]);
    }
  };

  const isStatusSelected = (item) => {
    return selectedStatuses?.includes(item);
  };

  return (
    <Select
      onValueChange={(val) => {
        handleStatusChange(val);
      }}
    >
      <SelectTrigger
        defaultValue="net-1"
        className="w-14 sm:w-[118px] min-w-fit border-none bg-transparent p-0 normal-case"
      >
        {isMobile ? 'Filter' : 'Filter by status'}
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
                checked={isStatusSelected(item)}
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
