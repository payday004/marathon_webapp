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
export declare type RunCreateFormInputValues = {
    runDate?: string;
    plannedDistance?: number;
    actualDistance?: number;
    pace?: number;
};
export declare type RunCreateFormValidationValues = {
    runDate?: ValidationFunction<string>;
    plannedDistance?: ValidationFunction<number>;
    actualDistance?: ValidationFunction<number>;
    pace?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RunCreateFormOverridesProps = {
    RunCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    runDate?: PrimitiveOverrideProps<TextFieldProps>;
    plannedDistance?: PrimitiveOverrideProps<TextFieldProps>;
    actualDistance?: PrimitiveOverrideProps<TextFieldProps>;
    pace?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RunCreateFormProps = React.PropsWithChildren<{
    overrides?: RunCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RunCreateFormInputValues) => RunCreateFormInputValues;
    onSuccess?: (fields: RunCreateFormInputValues) => void;
    onError?: (fields: RunCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RunCreateFormInputValues) => RunCreateFormInputValues;
    onValidate?: RunCreateFormValidationValues;
} & React.CSSProperties>;
export default function RunCreateForm(props: RunCreateFormProps): React.ReactElement;
