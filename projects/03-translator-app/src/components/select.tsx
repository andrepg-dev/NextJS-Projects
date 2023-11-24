import { Lang_Symbols } from '@/app/languages.d';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  onChanges: (event: Lang_Symbols) => void;
  value: string;
  entries: [string, string][];
}

export const SelectLanguage = ({ onChanges, value, entries }: Props) => {
  const handleChange = (event: Lang_Symbols) => {
    onChanges(event);
  };

  return (
    <Select
      value={value}
      onValueChange={handleChange}
      arial-label='Select Language' 
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {entries.map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
