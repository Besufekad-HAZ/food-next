import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p>Current route</p>
      <Link href="/meals/sample-slug">Go to Sample Meal Page</Link>
    </div>
  );
}
