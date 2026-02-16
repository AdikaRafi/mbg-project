import { MenuStats } from "@/components/menu/MenuStats";
import { MenuComposition } from "@/components/menu/MenuComposition";
import { WeeklyTrend } from "@/components/menu/WeeklyTrend";
import { MenuVariation } from "@/components/menu/MenuVariation";
import { UnitCost } from "@/components/menu/UnitCost";
import { AllergyAlerts } from "@/components/menu/AllergyAlerts";

export default function MenuPage() {
  return (
    <div className="pb-20 space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-base font-bold text-slate-900 dark:text-white">Detail & Analisis Menu</h2>
        </div>
      </div>

      <MenuStats />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <MenuComposition />
        </div>
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <WeeklyTrend />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MenuVariation />
                <UnitCost />
            </div>
        </div>
      </div>
      
      <AllergyAlerts />
    </div>
  );
}
