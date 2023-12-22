import { BlitzPage } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";

import { FORM_ERROR, Form } from "@/core/components/Form";
import { LabeledTextField } from "@/core/components/LabeledTextField";
import Layout from "@/core/layouts/Layout";

import forgotPassword from "@/features/auth/mutations/forgotPassword";
import { ForgotPassword } from "@/features/auth/schemas";

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);

  return (
    <Layout title="Forgot Your Password?">
      <h1>Forgot your password?</h1>

      {isSuccess ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <Form
          submitText="Send Reset Password Instructions"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            try {
              await forgotPasswordMutation(values);
            } catch (error: any) {
              return {
                [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
              };
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </Layout>
  );
};

export default ForgotPasswordPage;
