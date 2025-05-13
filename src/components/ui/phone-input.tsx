
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const phonePrefixes = [
  { code: "FR", prefix: "+33", country: "France" },
  { code: "BE", prefix: "+32", country: "Belgique" },
  { code: "CH", prefix: "+41", country: "Suisse" },
  { code: "LU", prefix: "+352", country: "Luxembourg" },
  { code: "CA", prefix: "+1", country: "Canada" },
  { code: "US", prefix: "+1", country: "États-Unis" },
  { code: "DE", prefix: "+49", country: "Allemagne" },
  { code: "ES", prefix: "+34", country: "Espagne" },
  { code: "IT", prefix: "+39", country: "Italie" },
  { code: "UK", prefix: "+44", country: "Royaume-Uni" },
];

export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix: string;
  setPrefix: (prefix: string) => void;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, prefix, setPrefix, ...props }, ref) => {
    return (
      <div className={cn("flex flex-row", className)}>
        <Select value={prefix} onValueChange={setPrefix}>
          <SelectTrigger className="w-[90px] rounded-r-none border-r-0 focus:ring-0">
            <SelectValue placeholder={prefix} />
          </SelectTrigger>
          <SelectContent>
            {phonePrefixes.map((country) => (
              <SelectItem key={country.code} value={country.prefix}>
                {country.prefix} ({country.code})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          className="rounded-l-none flex-1"
          type="tel"
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput, phonePrefixes };
