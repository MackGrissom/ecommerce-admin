"use client"

import { Store } from "@prisma/client"
import React from "react";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({
  initialData
}) => {
  return (
    <div>
        Settings Form! 
    </div>
  )
}

export default SettingsForm