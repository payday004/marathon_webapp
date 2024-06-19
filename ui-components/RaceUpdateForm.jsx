/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRace } from "./graphql/queries";
import { updateRace } from "./graphql/mutations";
const client = generateClient();
export default function RaceUpdateForm(props) {
  const {
    id: idProp,
    race: raceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    raceName: "",
    raceDay: "",
  };
  const [raceName, setRaceName] = React.useState(initialValues.raceName);
  const [raceDay, setRaceDay] = React.useState(initialValues.raceDay);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = raceRecord
      ? { ...initialValues, ...raceRecord }
      : initialValues;
    setRaceName(cleanValues.raceName);
    setRaceDay(cleanValues.raceDay);
    setErrors({});
  };
  const [raceRecord, setRaceRecord] = React.useState(raceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRace.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRace
        : raceModelProp;
      setRaceRecord(record);
    };
    queryData();
  }, [idProp, raceModelProp]);
  React.useEffect(resetStateValues, [raceRecord]);
  const validations = {
    raceName: [{ type: "Required" }],
    raceDay: [{ type: "Required" }],
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
          raceName,
          raceDay,
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
            query: updateRace.replaceAll("__typename", ""),
            variables: {
              input: {
                id: raceRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RaceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Race name"
        isRequired={true}
        isReadOnly={false}
        value={raceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName: value,
              raceDay,
            };
            const result = onChange(modelFields);
            value = result?.raceName ?? value;
          }
          if (errors.raceName?.hasError) {
            runValidationTasks("raceName", value);
          }
          setRaceName(value);
        }}
        onBlur={() => runValidationTasks("raceName", raceName)}
        errorMessage={errors.raceName?.errorMessage}
        hasError={errors.raceName?.hasError}
        {...getOverrideProps(overrides, "raceName")}
      ></TextField>
      <TextField
        label="Race day"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={raceDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDay: value,
            };
            const result = onChange(modelFields);
            value = result?.raceDay ?? value;
          }
          if (errors.raceDay?.hasError) {
            runValidationTasks("raceDay", value);
          }
          setRaceDay(value);
        }}
        onBlur={() => runValidationTasks("raceDay", raceDay)}
        errorMessage={errors.raceDay?.errorMessage}
        hasError={errors.raceDay?.hasError}
        {...getOverrideProps(overrides, "raceDay")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || raceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || raceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
