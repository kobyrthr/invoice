"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-background items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-spartan">
      <Card className="border-0 overflow-hidden">
        <CardContent className="flex items-center gap-3 p-4">
          <Button variant="primary" className="h-fit gap-4 p-2 pr-4" IconLeft={() => <PlusCircle height={24} width={24} weight="fill" className="text-white min-h-8 min-w-8" />}>Icon Button</Button>
          <Button variant="primary">Button 2</Button>
          <Button variant="default">Button 3</Button>
          <Button variant="secondary">Button 4</Button>
          <Button variant="destructive">Button 5</Button>
          <Button variant="default" className="w-full">+ Add New Item</Button>
        </CardContent>
      </Card>
    </div>
  );
}
