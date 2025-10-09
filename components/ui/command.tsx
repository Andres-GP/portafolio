// components/ui/command.tsx
"use client";

import * as React from "react";
import {
  Command as CommandPrimitive,
  CommandDialog as CommandDialogPrimitive,
  CommandEmpty as CommandEmptyPrimitive,
  CommandGroup as CommandGroupPrimitive,
  CommandInput as CommandInputPrimitive,
  CommandItem as CommandItemPrimitive,
  CommandList as CommandListPrimitive,
  CommandSeparator as CommandSeparatorPrimitive,
} from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// --- CommandDialog ---
export function CommandDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <div className="p-4 border-b">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

// --- Command Root ---
export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={className} {...props} />
));
Command.displayName = "Command";

// --- CommandInput ---
export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandInputPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandInputPrimitive>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <CommandInputPrimitive
      ref={ref}
      className={`flex-1 bg-transparent outline-none py-2 ${className ?? ""}`}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

// --- CommandList ---
export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandListPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandListPrimitive>
>(({ className, ...props }, ref) => (
  <CommandListPrimitive ref={ref} className={className} {...props} />
));
CommandList.displayName = "CommandList";

// --- CommandEmpty ---
export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandEmptyPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandEmptyPrimitive>
>(({ className, ...props }, ref) => (
  <CommandEmptyPrimitive ref={ref} className={className} {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

// --- CommandGroup ---
export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandGroupPrimitive>
>(({ className, ...props }, ref) => (
  <CommandGroupPrimitive ref={ref} className={className} {...props} />
));
CommandGroup.displayName = "CommandGroup";

// --- CommandSeparator ---
export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <CommandSeparatorPrimitive ref={ref} className={className} {...props} />
));
CommandSeparator.displayName = "CommandSeparator";

// --- CommandItem ---
export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandItemPrimitive>
>(({ className, ...props }, ref) => (
  <CommandItemPrimitive ref={ref} className={className} {...props} />
));
CommandItem.displayName = "CommandItem";
