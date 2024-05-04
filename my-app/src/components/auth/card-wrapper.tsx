"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";

interface cardWrapperProps {
  label: string
  title: string
  backButtonref: string
  backButtonLabel: string
  children: React.ReactNode
}

const cardWrapper = ({
  label,
  title,
  backButtonref,
  backButtonLabel,
  children,
}: cardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonref} />
      </CardFooter>
    </Card>
  );
};

export default cardWrapper;
