// src/app/shared/shared.module.ts

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FreeDraggingDirective } from "./free-dragging.directive";
import { FreeDraggingHandleDirective } from './free-dragging-handle.directive';

@NgModule({
  declarations: [FreeDraggingDirective, FreeDraggingHandleDirective],
  imports: [
    CommonModule,
  ],
  exports: [FreeDraggingDirective,FreeDraggingHandleDirective], // Added
})
export class SharedModule {}