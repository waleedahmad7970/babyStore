import Image from "next/image";

interface SubCategory {
  label: string;
  icon: string;
  viewAllLink?: string;
}

interface SubCategoryListProps {
  title: string;
  categories: SubCategory[];
}

export const SubCategoryList: React.FC<SubCategoryListProps> = ({
  title,
  categories,
}) => {
  return (
    <div className="mb-6">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {categories.map((sub, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Image
                src={sub.icon}
                alt={sub.label}
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-medium text-gray-700">{sub.label}</span>
            </div>
            {sub.viewAllLink && (
              <a
                href={sub.viewAllLink}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                VIEW ALL
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
