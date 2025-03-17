<template>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <LayoutTitle title="Informations" />
        <div class="flex flex-col space-y-32">
            <div
                v-for="(index) in 5"
                :key="index"
                class="grid grid-cols-12 gap-4"
            >
                <div class="col-span-2 mt-16">
                    <IconsCalendarDays class="w-20 h-20 inline-block" />
                </div>
                <div class="col-span-10">
                    <h2 class="mb-4 text-5xl font-semibold">
                        Titre
                    </h2>
                    <p class="font-lg">
                        Tu as déjà tout vu, tout fait lors de tes innombrables voyages autour du monde. Tu es blasé, désespérément à la recherche de quelque chose d’original pour te dépayser, loin du train-train de ton travail quotidien ?

Le Chant du Gros t’offre le camping de tes rêves. Nous ne garantissons pas le beau temps. Nous n’acceptons pas les réservations. Il est même possible que le Cheval Blanc ne soit pas blanc mais plutôt brun, si la hauteur de boue le permet!

Bref un camping de festival presque comme tous les autres à ceci près qu’au mois de septembre à 1000 mètres d’altitude, on se pèle le cul!

Alors prends ta doudoune, ta bonne humeur et quelques potes et viens passer ce qu’il te restera de nuit dans notre camping.

Si tu renonces à cette chance unique et que tu viens avec ton camping-car tu devras t’exiler sur le parking des camping-cars.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>