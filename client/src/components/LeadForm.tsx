import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export function LeadForm() {
  const { mutate: createLead, isPending } = useCreateLead();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      entity: "",
      position: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: InsertLead) => {
    createLead(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800">Comience ahora</h3>
        <p className="text-slate-500 mt-2">Déjenos sus datos y un especialista lo contactará para una demostración personalizada.</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input
              id="name"
              placeholder="Juan Pérez"
              className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono / Celular</Label>
            <Input
              id="phone"
              placeholder="999 888 777"
              className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
              {...form.register("phone")}
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="entity">Entidad Pública</Label>
          <Input
            id="entity"
            placeholder="Municipalidad / Gobierno Regional / Ministerio"
            className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
            {...form.register("entity")}
          />
          {form.formState.errors.entity && (
            <p className="text-sm text-destructive">{form.formState.errors.entity.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo Institucional</Label>
          <Input
            id="email"
            type="email"
            placeholder="jperez@entidad.gob.pe"
            className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Cargo</Label>
          <Input
            id="position"
            placeholder="Jefe de Logística / Administrador"
            className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20"
            {...form.register("position")}
          />
          {form.formState.errors.position && (
            <p className="text-sm text-destructive">{form.formState.errors.position.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 mt-4"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Información"
          )}
        </Button>
      </form>
    </div>
  );
}
