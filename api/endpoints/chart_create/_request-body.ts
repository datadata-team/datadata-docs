export interface CreateChartBody {
  name: string;
  description?: string;
  datasetQuery: {
    type: "native";
    native: {
      query: string;
    };
    dataSourceId: string;
  };
}
