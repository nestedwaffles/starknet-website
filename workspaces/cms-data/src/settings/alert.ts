import { defaultLocale } from "../i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";

export interface Alert {
  readonly title: string;
  readonly body: string;
  readonly variant?: "important" | "info" | "warning";
  readonly hasCloseButton?: boolean;
  readonly page_url?: string;
  readonly id: string;
}

export async function getAlerts(locale: string): Promise<Alert[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => (await fetch(`/data/alert/${value}.json`)).json()
      )
    );
  } catch (cause) {
    throw new Error("getAlerts failed!", {
      cause,
    });
  }
}