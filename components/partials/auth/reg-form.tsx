
"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const RegForm = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div className="space-y-2">
        <Label htmlFor="name">Nom Entreprise</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("example")}
          size="lg"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Entreprise</Label>
        <Input
          id="email"
          placeholder="dashcode@gmail.com"
          {...register("example")}
          size="lg"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">Téléphone Entreprise</Label>
        <Input
          id="number"
          type="number"
          placeholder="225 00 00 00 00 00"
          {...register("exampleRequired", { required: true })}
          size="lg"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="activity">Activités de l'entreprise</Label>
        <Input
          id="activity"
          type="texte"
          placeholder="Batiment, Dev, Compta..."
          {...register("exampleRequired", { required: true })}
          size="lg"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">Personne à contacter</Label>
        <Input
          id="number"
          type="number"
          placeholder="225 00 00 00 00 00"
          {...register("exampleRequired", { required: true })}
          size="lg"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="number">Description</Label>
        <Textarea placeholder="Decrivez vos besoins ici." />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Label htmlFor="checkbox">
            Vous acceptez les termes et  CONDITIONS...
          </Label>
        </div>
      </div>

      <Button type="submit" fullWidth>
        Créer le compte
      </Button>
    </form>
  );
};
export default RegForm;
