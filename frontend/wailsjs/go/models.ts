export namespace models {
  export class SubcategoryStat {
    subcategory: string;
    count: number;

    static createFrom(source: any = {}) {
      return new SubcategoryStat(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.subcategory = source['subcategory'];
      this.count = source['count'];
    }
  }
  export class CategoryStat {
    category: string;
    total_count: number;
    subcategories: string[];
    subcategories_stats: SubcategoryStat[];

    static createFrom(source: any = {}) {
      return new CategoryStat(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.category = source['category'];
      this.total_count = source['total_count'];
      this.subcategories = source['subcategories'];
      this.subcategories_stats = this.convertValues(source['subcategories_stats'], SubcategoryStat);
    }

    convertValues(a: any, classs: any, asMap: boolean = false): any {
      if (!a) {
        return a;
      }
      if (a.slice && a.map) {
        return (a as any[]).map((elem) => this.convertValues(elem, classs));
      } else if ('object' === typeof a) {
        if (asMap) {
          for (const key of Object.keys(a)) {
            a[key] = new classs(a[key]);
          }
          return a;
        }
        return new classs(a);
      }
      return a;
    }
  }
  export class Cheatsheet {
    id: pgtype.UUID;
    slug: string;
    title: string;
    category: string;
    subcategory: string;
    image_url: pgtype.Text;
    created_at: pgtype.Timestamptz;
    updated_at: pgtype.Timestamptz;

    static createFrom(source: any = {}) {
      return new Cheatsheet(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.id = this.convertValues(source['id'], pgtype.UUID);
      this.slug = source['slug'];
      this.title = source['title'];
      this.category = source['category'];
      this.subcategory = source['subcategory'];
      this.image_url = this.convertValues(source['image_url'], pgtype.Text);
      this.created_at = this.convertValues(source['created_at'], pgtype.Timestamptz);
      this.updated_at = this.convertValues(source['updated_at'], pgtype.Timestamptz);
    }

    convertValues(a: any, classs: any, asMap: boolean = false): any {
      if (!a) {
        return a;
      }
      if (a.slice && a.map) {
        return (a as any[]).map((elem) => this.convertValues(elem, classs));
      } else if ('object' === typeof a) {
        if (asMap) {
          for (const key of Object.keys(a)) {
            a[key] = new classs(a[key]);
          }
          return a;
        }
        return new classs(a);
      }
      return a;
    }
  }
  export class GlobalStats {
    total_cheatsheets: number;
    total_views: number;
    total_unique_visitors: number;
    total_clicks: number;
    total_downloads: number;

    static createFrom(source: any = {}) {
      return new GlobalStats(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.total_cheatsheets = source['total_cheatsheets'];
      this.total_views = source['total_views'];
      this.total_unique_visitors = source['total_unique_visitors'];
      this.total_clicks = source['total_clicks'];
      this.total_downloads = source['total_downloads'];
    }
  }
  export class ConfigResponse {
    categories: string[];
    subcategories: string[];
    category_stats: CategoryStat[];
    stats: GlobalStats;

    static createFrom(source: any = {}) {
      return new ConfigResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.categories = source['categories'];
      this.subcategories = source['subcategories'];
      this.category_stats = this.convertValues(source['category_stats'], CategoryStat);
      this.stats = this.convertValues(source['stats'], GlobalStats);
    }

    convertValues(a: any, classs: any, asMap: boolean = false): any {
      if (!a) {
        return a;
      }
      if (a.slice && a.map) {
        return (a as any[]).map((elem) => this.convertValues(elem, classs));
      } else if ('object' === typeof a) {
        if (asMap) {
          for (const key of Object.keys(a)) {
            a[key] = new classs(a[key]);
          }
          return a;
        }
        return new classs(a);
      }
      return a;
    }
  }
}

export namespace pgtype {
  export class Text {
    String: string;
    Valid: boolean;

    static createFrom(source: any = {}) {
      return new Text(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.String = source['String'];
      this.Valid = source['Valid'];
    }
  }
  export class Timestamptz {
    // Go type: time
    Time: any;
    InfinityModifier: number;
    Valid: boolean;

    static createFrom(source: any = {}) {
      return new Timestamptz(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.Time = this.convertValues(source['Time'], null);
      this.InfinityModifier = source['InfinityModifier'];
      this.Valid = source['Valid'];
    }

    convertValues(a: any, classs: any, asMap: boolean = false): any {
      if (!a) {
        return a;
      }
      if (a.slice && a.map) {
        return (a as any[]).map((elem) => this.convertValues(elem, classs));
      } else if ('object' === typeof a) {
        if (asMap) {
          for (const key of Object.keys(a)) {
            a[key] = new classs(a[key]);
          }
          return a;
        }
        return new classs(a);
      }
      return a;
    }
  }
  export class UUID {
    Bytes: number[];
    Valid: boolean;

    static createFrom(source: any = {}) {
      return new UUID(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.Bytes = source['Bytes'];
      this.Valid = source['Valid'];
    }
  }
}
