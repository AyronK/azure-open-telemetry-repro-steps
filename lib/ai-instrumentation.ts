/* eslint-disable react-hooks/rules-of-hooks */
import { useAzureMonitor } from "@azure/monitor-opentelemetry";
import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

export async function register() {
  if (!process.env.APPLICATION_INSIGHTS_CONNECTION_STRING) {
    return;
  }

  try {
    useAzureMonitor({
      azureMonitorExporterOptions: {
        connectionString: process.env.APPLICATION_INSIGHTS_CONNECTION_STRING,
      },
      resource: new Resource({
        [ATTR_SERVICE_NAME]: "TEST",
      }),
      enableLiveMetrics: true,
      enableStandardMetrics: true,
      browserSdkLoaderOptions: { enabled: false },
      enableTraceBasedSamplingForLogs: true,
    });
  } catch (e) {
    console.error(e);
  }
}
