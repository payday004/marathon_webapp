import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Race } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RaceUpdateFormInputValues = {
    raceName?: string;
    raceDay?: string;
};
export declare type RaceUpdateFormValidationValues = {
    raceName?: ValidationFunction<string>;
    raceDay?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceUpdateFormOverridesProps = {
    RaceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    raceName?: PrimitiveOverrideProps<TextFieldProps>;
    raceDay?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: RaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    race?: Race;
    onSubmit?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onSuccess?: (fields: RaceUpdateFormInputValues) => void;
    onError?: (fields: RaceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onValidate?: RaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RaceUpdateForm(props: RaceUpdateFormProps): React.ReactElement;
