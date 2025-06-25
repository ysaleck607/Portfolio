import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Saleck-Ben Yessoufou</h1>
        <p className="text-lg mt-2">Développeur Full Stack | Passionné par le Cloud & l'Expérience Utilisateur</p>
      </header>

      <section className="max-w-4xl mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-medium">App de Notation de Logements</h3>
              <p className="text-sm text-gray-600 my-2">
                Application permettant aux locataires de laisser des avis sur leur expérience : logement, voisins, propriétaires. Stack : React, Azure Functions, Cosmos DB.
              </p>
              <Button variant="outline" className="mt-2">Voir sur GitHub</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-medium">Dashboard Azure</h3>
              <p className="text-sm text-gray-600 my-2">
                Tableau de bord affichant des métriques Azure en temps réel. Utilise App Insights + API REST déployée sur Azure.
              </p>
              <Button variant="outline" className="mt-2">Voir sur GitHub</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Frontend : React, Angular, Tailwind CSS</li>
          <li>Backend : Java (Spring Boot), Node.js, .NET</li>
          <li>Cloud : Azure (Functions, App Services, Cosmos DB, Static Web Apps)</li>
          <li>Autres : Git, GitHub Actions, Docker, MongoDB, PostgreSQL</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4">À propos</h2>
        <p className="text-sm text-gray-700">
          Diplômé en informatique de l'Université de Sherbrooke, je développe des applications modernes en misant sur la performance, l'expérience utilisateur et le cloud. Mon objectif : devenir architecte logiciel spécialisé Azure.
        </p>
      </section>

      <section className="max-w-4xl mx-auto my-10 text-sm">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email : salecky.dev@gmail.com</p>
        <p>GitHub : <a href="https://github.com/salecky" className="text-blue-600 underline">github.com/salecky</a></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/salecky" className="text-blue-600 underline">linkedin.com/in/salecky</a></p>
      </section>
    </main>
  );
}
