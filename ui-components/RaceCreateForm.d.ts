import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RaceCreateFormInputValues = {
    raceName?: string;
    raceDay?: string;
};
export declare type RaceCreateFormValidationValues = {
    raceName?: ValidationFunction<string>;
    raceDay?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceCreateFormOverridesProps = {
    RaceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    raceName?: PrimitiveOverrideProps<TextFieldProps>;
    raceDay?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceCreateFormProps = React.PropsWithChildren<{
    overrides?: RaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onSuccess?: (fields: RaceCreateFormInputValues) => void;
    onError?: (fields: RaceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onValidate?: RaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function RaceCreateForm(props: RaceCreateFormProps): React.ReactElement;
