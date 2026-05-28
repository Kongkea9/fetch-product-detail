import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductResponse } from "@/lib/product";

export function ProductCardComponent({
  product,
}: {
  product: ProductResponse;
}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product?.images?.[0]}
        alt={product?.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{product?.slug}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardTitle>{product?.title}</CardTitle>
        <CardTitle className="text-border text-red-500">
          {product?.price}$
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {product?.description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
