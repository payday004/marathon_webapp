/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRun } from "./graphql/mutations";
const client = generateClient();
export default function RunCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    runDate: "",
    plannedDistance: "",
    actualDistance: "",
    pace: "",
  };
  const [runDate, setRunDate] = React.useState(initialValues.runDate);
  const [plannedDistance, setPlannedDistance] = React.useState(
    initialValues.plannedDistance
  );
  const [actualDistance, setActualDistance] = React.useState(
    initialValues.actualDistance
  );
  const [pace, setPace] = React.useState(initialValues.pace);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRunDate(initialValues.runDate);
    setPlannedDistance(initialValues.plannedDistance);
    setActualDistance(initialValues.actualDistance);
    setPace(initialValues.pace);
    setErrors({});
  };
  const validations = {
    runDate: [{ type: "Required" }],
    plannedDistance: [],
    actualDistance: [],
    pace: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          runDate,
          plannedDistance,
          actualDistance,
          pace,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createRun.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RunCreateForm")}
      {...rest}
    >
      <TextField
        label="Run date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={runDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              runDate: value,
              plannedDistance,
              actualDistance,
              pace,
            };
            const result = onChange(modelFields);
            value = result?.runDate ?? value;
          }
          if (errors.runDate?.hasError) {
            runValidationTasks("runDate", value);
          }
          setRunDate(value);
        }}
        onBlur={() => runValidationTasks("runDate", runDate)}
        errorMessage={errors.runDate?.errorMessage}
        hasError={errors.runDate?.hasError}
        {...getOverrideProps(overrides, "runDate")}
      ></TextField>
      <TextField
        label="Planned distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={plannedDistance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              runDate,
              plannedDistance: value,
              actualDistance,
              pace,
            };
            const result = onChange(modelFields);
            value = result?.plannedDistance ?? value;
          }
          if (errors.plannedDistance?.hasError) {
            runValidationTasks("plannedDistance", value);
          }
          setPlannedDistance(value);
        }}
        onBlur={() => runValidationTasks("plannedDistance", plannedDistance)}
        errorMessage={errors.plannedDistance?.errorMessage}
        hasError={errors.plannedDistance?.hasError}
        {...getOverrideProps(overrides, "plannedDistance")}
      ></TextField>
      <TextField
        label="Actual distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={actualDistance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              runDate,
              plannedDistance,
              actualDistance: value,
              pace,
            };
            const result = onChange(modelFields);
            value = result?.actualDistance ?? value;
          }
          if (errors.actualDistance?.hasError) {
            runValidationTasks("actualDistance", value);
          }
          setActualDistance(value);
        }}
        onBlur={() => runValidationTasks("actualDistance", actualDistance)}
        errorMessage={errors.actualDistance?.errorMessage}
        hasError={errors.actualDistance?.hasError}
        {...getOverrideProps(overrides, "actualDistance")}
      ></TextField>
      <TextField
        label="Pace"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pace}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              runDate,
              plannedDistance,
              actualDistance,
              pace: value,
            };
            const result = onChange(modelFields);
            value = result?.pace ?? value;
          }
          if (errors.pace?.hasError) {
            runValidationTasks("pace", value);
          }
          setPace(value);
        }}
        onBlur={() => runValidationTasks("pace", pace)}
        errorMessage={errors.pace?.errorMessage}
        hasError={errors.pace?.hasError}
        {...getOverrideProps(overrides, "pace")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
