import React from "react";

export default function AuthLayouit({
    children
}: {
    children: React.ReactNode }) {
        return (
            <div className="flex items-center justify-center h-full pt-4">
                {children}
            </div>
        )
    }
