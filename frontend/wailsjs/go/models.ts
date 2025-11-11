export namespace models {
  export class DataStat {
    name: string;
    views: number;
    visitors: number;

    static createFrom(source: any = {}) {
      return new DataStat(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.name = source['name'];
      this.views = source['views'];
      this.visitors = source['visitors'];
    }
  }
  export class BrowserStatsResponse {
    period: string;
    // Go type: time
    start_date: any;
    // Go type: time
    end_date: any;
    total_views: number;
    total_unique_visitors: number;
    browsers: DataStat[];

    static createFrom(source: any = {}) {
      return new BrowserStatsResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.period = source['period'];
      this.start_date = this.convertValues(source['start_date'], null);
      this.end_date = this.convertValues(source['end_date'], null);
      this.total_views = source['total_views'];
      this.total_unique_visitors = source['total_unique_visitors'];
      this.browsers = this.convertValues(source['browsers'], DataStat);
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

  export class DeviceStat {
    // Go type: time
    date: any;
    mobile_views: number;
    mobile_visitors: number;
    desktop_views: number;
    desktop_visitors: number;

    static createFrom(source: any = {}) {
      return new DeviceStat(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.date = this.convertValues(source['date'], null);
      this.mobile_views = source['mobile_views'];
      this.mobile_visitors = source['mobile_visitors'];
      this.desktop_views = source['desktop_views'];
      this.desktop_visitors = source['desktop_visitors'];
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
  export class DeviceStatsResponse {
    period: string;
    // Go type: time
    start_date: any;
    // Go type: time
    end_date: any;
    total_mobile_views: number;
    total_mobile_visitors: number;
    total_desktop_views: number;
    total_desktop_visitors: number;
    intervals: DeviceStat[];

    static createFrom(source: any = {}) {
      return new DeviceStatsResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.period = source['period'];
      this.start_date = this.convertValues(source['start_date'], null);
      this.end_date = this.convertValues(source['end_date'], null);
      this.total_mobile_views = source['total_mobile_views'];
      this.total_mobile_visitors = source['total_mobile_visitors'];
      this.total_desktop_views = source['total_desktop_views'];
      this.total_desktop_visitors = source['total_desktop_visitors'];
      this.intervals = this.convertValues(source['intervals'], DeviceStat);
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

  export class MetricsOverview {
    // Go type: time
    date: any;
    views: number;
    visitors: number;

    static createFrom(source: any = {}) {
      return new MetricsOverview(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.date = this.convertValues(source['date'], null);
      this.views = source['views'];
      this.visitors = source['visitors'];
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
  export class MetricsOverviewResponse {
    period: string;
    // Go type: time
    start_date: any;
    // Go type: time
    end_date: any;
    total_views: number;
    total_unique_visitors: number;
    intervals: MetricsOverview[];

    static createFrom(source: any = {}) {
      return new MetricsOverviewResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.period = source['period'];
      this.start_date = this.convertValues(source['start_date'], null);
      this.end_date = this.convertValues(source['end_date'], null);
      this.total_views = source['total_views'];
      this.total_unique_visitors = source['total_unique_visitors'];
      this.intervals = this.convertValues(source['intervals'], MetricsOverview);
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
  export class OperatingSystemStatsResponse {
    period: string;
    // Go type: time
    start_date: any;
    // Go type: time
    end_date: any;
    total_views: number;
    total_unique_visitors: number;
    operating_systems: DataStat[];

    static createFrom(source: any = {}) {
      return new OperatingSystemStatsResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.period = source['period'];
      this.start_date = this.convertValues(source['start_date'], null);
      this.end_date = this.convertValues(source['end_date'], null);
      this.total_views = source['total_views'];
      this.total_unique_visitors = source['total_unique_visitors'];
      this.operating_systems = this.convertValues(source['operating_systems'], DataStat);
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
  export class ReferrerStatsResponse {
    period: string;
    // Go type: time
    start_date: any;
    // Go type: time
    end_date: any;
    total_views: number;
    total_unique_visitors: number;
    referrers: DataStat[];

    static createFrom(source: any = {}) {
      return new ReferrerStatsResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.period = source['period'];
      this.start_date = this.convertValues(source['start_date'], null);
      this.end_date = this.convertValues(source['end_date'], null);
      this.total_views = source['total_views'];
      this.total_unique_visitors = source['total_unique_visitors'];
      this.referrers = this.convertValues(source['referrers'], DataStat);
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
  export class ResourceUsage {
    size_bytes: number;
    size_pretty: string;
    limit_bytes: number;
    limit_pretty: string;
    usage_percent: number;

    static createFrom(source: any = {}) {
      return new ResourceUsage(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.size_bytes = source['size_bytes'];
      this.size_pretty = source['size_pretty'];
      this.limit_bytes = source['limit_bytes'];
      this.limit_pretty = source['limit_pretty'];
      this.usage_percent = source['usage_percent'];
    }
  }

  export class UsageResponse {
    database: ResourceUsage;
    storage: ResourceUsage;
    timestamp: string;

    static createFrom(source: any = {}) {
      return new UsageResponse(source);
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source);
      this.database = this.convertValues(source['database'], ResourceUsage);
      this.storage = this.convertValues(source['storage'], ResourceUsage);
      this.timestamp = source['timestamp'];
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
