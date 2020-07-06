import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {
  public async getCategoryID(category: string): Promise<string> {
    const findCategory = await this.findOne({
      where: { title: category },
    });

    if (!findCategory) {
      const createCategory = this.create({
        title: category,
      });

      await this.save(createCategory);

      return createCategory.id;
    }

    return findCategory.id;
  }
}

export default CategoryRepository;
