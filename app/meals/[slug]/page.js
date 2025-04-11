export default function MealPage({ params }) {
    const { slug } = params;

    return (
        <div>
            <h1>Meal: {slug}</h1>
            {/* You can add more content here based on the slug */}
        </div>
    );
}
