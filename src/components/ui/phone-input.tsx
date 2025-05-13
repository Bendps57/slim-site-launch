
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useState } from "react";

const phonePrefixes = [
  // Pays fréquemment utilisés
  { code: "FR", prefix: "+33", country: "France" },
  { code: "BE", prefix: "+32", country: "Belgique" },
  { code: "CH", prefix: "+41", country: "Suisse" },
  { code: "CA", prefix: "+1", country: "Canada" },
  { code: "LU", prefix: "+352", country: "Luxembourg" },
  { code: "MA", prefix: "+212", country: "Maroc" },
  { code: "DZ", prefix: "+213", country: "Algérie" },
  { code: "TN", prefix: "+216", country: "Tunisie" },
  { code: "SN", prefix: "+221", country: "Sénégal" },
  { code: "CI", prefix: "+225", country: "Côte d'Ivoire" },
  { code: "CM", prefix: "+237", country: "Cameroun" },
  
  // Autres pays par ordre alphabétique
  { code: "ZA", prefix: "+27", country: "Afrique du Sud" },
  { code: "DE", prefix: "+49", country: "Allemagne" },
  { code: "AO", prefix: "+244", country: "Angola" },
  { code: "BJ", prefix: "+229", country: "Bénin" },
  { code: "BW", prefix: "+267", country: "Botswana" },
  { code: "BF", prefix: "+226", country: "Burkina Faso" },
  { code: "BI", prefix: "+257", country: "Burundi" },
  { code: "CV", prefix: "+238", country: "Cap-Vert" },
  { code: "KM", prefix: "+269", country: "Comores" },
  { code: "CG", prefix: "+242", country: "Congo" },
  { code: "CD", prefix: "+243", country: "République démocratique du Congo" },
  { code: "DJ", prefix: "+253", country: "Djibouti" },
  { code: "EG", prefix: "+20", country: "Égypte" },
  { code: "ES", prefix: "+34", country: "Espagne" },
  { code: "US", prefix: "+1", country: "États-Unis" },
  { code: "ET", prefix: "+251", country: "Éthiopie" },
  { code: "ER", prefix: "+291", country: "Érythrée" },
  { code: "GA", prefix: "+241", country: "Gabon" },
  { code: "GM", prefix: "+220", country: "Gambie" },
  { code: "GH", prefix: "+233", country: "Ghana" },
  { code: "GN", prefix: "+224", country: "Guinée" },
  { code: "GQ", prefix: "+240", country: "Guinée équatoriale" },
  { code: "GW", prefix: "+245", country: "Guinée-Bissau" },
  { code: "IT", prefix: "+39", country: "Italie" },
  { code: "KE", prefix: "+254", country: "Kenya" },
  { code: "LS", prefix: "+266", country: "Lesotho" },
  { code: "LR", prefix: "+231", country: "Liberia" },
  { code: "LY", prefix: "+218", country: "Libye" },
  { code: "MG", prefix: "+261", country: "Madagascar" },
  { code: "MW", prefix: "+265", country: "Malawi" },
  { code: "ML", prefix: "+223", country: "Mali" },
  { code: "MR", prefix: "+222", country: "Mauritanie" },
  { code: "MU", prefix: "+230", country: "Maurice" },
  { code: "MZ", prefix: "+258", country: "Mozambique" },
  { code: "NA", prefix: "+264", country: "Namibie" },
  { code: "NE", prefix: "+227", country: "Niger" },
  { code: "NG", prefix: "+234", country: "Nigeria" },
  { code: "UG", prefix: "+256", country: "Ouganda" },
  { code: "UK", prefix: "+44", country: "Royaume-Uni" },
  { code: "RW", prefix: "+250", country: "Rwanda" },
  { code: "EH", prefix: "+212", country: "Sahara occidental" },
  { code: "ST", prefix: "+239", country: "Sao Tomé-et-Principe" },
  { code: "SC", prefix: "+248", country: "Seychelles" },
  { code: "SL", prefix: "+232", country: "Sierra Leone" },
  { code: "SO", prefix: "+252", country: "Somalie" },
  { code: "SD", prefix: "+249", country: "Soudan" },
  { code: "SS", prefix: "+211", country: "Soudan du Sud" },
  { code: "SZ", prefix: "+268", country: "Eswatini" },
  { code: "TZ", prefix: "+255", country: "Tanzanie" },
  { code: "TD", prefix: "+235", country: "Tchad" },
  { code: "CF", prefix: "+236", country: "République centrafricaine" },
  { code: "TG", prefix: "+228", country: "Togo" },
  { code: "ZM", prefix: "+260", country: "Zambie" },
  { code: "ZW", prefix: "+263", country: "Zimbabwe" },
];

export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix: string;
  setPrefix: (prefix: string) => void;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, prefix, setPrefix, ...props }, ref) => {
    const [isCustomPrefix, setIsCustomPrefix] = useState(false);

    return (
      <div className={cn("flex flex-row", className)}>
        {isCustomPrefix ? (
          <div className="relative flex items-center">
            <Input
              className="w-[90px] rounded-r-none border-r-0"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="+XX"
            />
            <button
              type="button"
              onClick={() => setIsCustomPrefix(false)}
              className="absolute right-2 text-xs text-primary hover:text-primary/80"
            >
              liste
            </button>
          </div>
        ) : (
          <Select value={prefix} onValueChange={setPrefix}>
            <SelectTrigger className="w-[90px] rounded-r-none border-r-0 focus:ring-0">
              <SelectValue placeholder={prefix} />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <div className="p-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCustomPrefix(true);
                  }}
                  className="w-full text-left text-xs text-primary hover:underline p-1"
                >
                  Saisir manuellement
                </button>
              </div>
              {phonePrefixes.map((country) => (
                <SelectItem key={country.code} value={country.prefix}>
                  {country.prefix} ({country.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
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
