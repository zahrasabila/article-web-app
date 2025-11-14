import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { useCategories } from "../hooks/useCategories";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

interface ArticleFilterDialogProps {
  value: string; // filter aktif dari parent
  onChange: (category: string) => void; // kirim ke parent
}

export default function ArticleFilterDialog({
  value,
  onChange,
}: ArticleFilterDialogProps) {
  const [open, setOpen] = useState(false);
  const [tempCategory, setTempCategory] = useState(value);
  const { data = [] } = useCategories();
  const categories = data?.data;
  console.log("categories:", categories);

  useEffect(() => {
    if (open) {
      setTempCategory(value || "all");
    }
  }, [open, value]);

  const handleApply = () => {
    const appliedValue = tempCategory === "all" ? "" : tempCategory;
    onChange(appliedValue);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border shadow-none hover:bg-accent w-fit"
        >
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pilih Kategori</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <Select value={tempCategory} onValueChange={setTempCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih kategori" />
            </SelectTrigger>

            <SelectContent className="w-[var(--radix-select-trigger-width)]">
              <SelectItem value="all">Semua Kategori</SelectItem>
              {categories?.map((cat: any) => (
                <SelectItem key={cat.id} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border shadow-none hover:bg-accent w-fit"
          >
            Batal
          </Button>
          <Button onClick={handleApply}>Terapkan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
