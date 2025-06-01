import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-3", className)}>
      <DayPicker
        {...props}
      />
    </div>
  )
);
Calendar.displayName = "Calendar";
