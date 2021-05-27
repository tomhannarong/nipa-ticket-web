import React, { ReactElement, useEffect } from "react";
import { Typography, makeStyles, MenuItem } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Select, TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/actions";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TicketEditReducer } from "../../types/ticketEdit.reducer.types";
import { Status, Ticket } from "../../types/ticket.type";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPageContext } from "next";
import axios from "axios";
import { StatusListReducer } from "../../types/statusList.reducer.types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}));

interface Props {}

export default function Edit({
  id,
  title,
  description,
  status,
  contact,
}: Ticket): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();

  const ticketEditReducer: TicketEditReducer = useSelector(
    ({ ticketEditReducer }: any) => ticketEditReducer
  );

  const statusListReducer: StatusListReducer = useSelector(
    ({ statusListReducer }: any) => statusListReducer
  );

  useEffect(() => {
    dispatch(Actions.feedStatusList());
  }, []);

  const showForm = ({ values, setFieldValue, isValid, dirty }) => {
    return (
      <Form>
        <Card className={classes.card} elevation={10}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Edit Ticket
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="title"
              type="text"
              label="Title"
            />
            <br />
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="description"
              type="text"
              label="Description"
            />
            <Field
              className={classes.field}
              component={TextField}
              type="text"
              name="status_id"
              label="Status"
              select={true}
              fullWidth
            >
              {(statusListReducer.result
                ? statusListReducer.result.data
                : []
              ).map(({ status, id }: Status, index) => {
                return <MenuItem value={`${id}`}>{status}</MenuItem>;
              })}
            </Field>
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="tel"
              type="text"
              label="Tel"
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!(isValid && dirty) || ticketEditReducer.isFetching}
            >
              Save
              {ticketEditReducer.isFetching && (
                <CircularProgress
                  color="secondary"
                  size={20}
                  style={{ marginLeft: 8 }}
                />
              )}
            </Button>
            <Button
              onClick={() => {
                Router.back();
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  return (
    <>
      <Formik
        validate={({ title, description }) => {
          let errors: any = {};
          if (!title) errors.title = "Enter Title";
          if (!description) errors.description = "Enter Description";
          return errors;
        }}
        initialValues={{
          title,
          description,
          name: contact.name,
          tel: contact.tel,
          status_id: status.id,
        }}
        onSubmit={(values: any, { setSubmitting }) => {
          let bodyFormData = new FormData();
          bodyFormData.append("Title", values.title);
          bodyFormData.append("Description", values.description);
          bodyFormData.append("StatusID", values.status_id);
          bodyFormData.append("Name", values.name);
          bodyFormData.append("Tel", values.tel);
          dispatch(Actions.editTicket(bodyFormData, id));
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await Actions.doGetTicketById(context.query.id);
  return {
    props: {
      ...result.data,
    },
  };
};
